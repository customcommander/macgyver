NODE_BIN_DIR = ./node_modules/.bin

lib_files = $(shell find lib -name "*.js")
test_files = $(shell find test -name "*.spec.js")
covered_files = $(addprefix build/covered/,$(lib_files))

build: build/install build/macgyver.js
lint: build/install build/lint
test: build/install build/test
dist: dist/macgyver.js

clean:
	rm -rfv build

dist/macgyver.js: build/install build/lint build/test
ifneq ($(shell git status -s),)
	$(error Working directory not clean)
else ifndef VERSION
	$(error VERSION is not defined. Usage: VERSION=X.X.X make dist)
else
	mkdir -p $(dir $@)
	$(NODE_BIN_DIR)/webpack \
		--entry=./lib/macgyver.js \
		--output-library=macgyver \
		--output-library-target=umd \
		--output-filename=$@
	git add $@
	npm version $(VERSION) -f -m "Releasing MacGyver %s"
endif

build/install: package.json
	mkdir -p $(dir $@)
	npm install
	touch $@

build/lint: $(lib_files) $(test_files)
	mkdir -p $(dir $@)
	$(NODE_BIN_DIR)/eslint ./
	touch $@

build/test: build/macgyver.js $(test_files) karma.conf-base.js karma.conf-travis.js
	mkdir -p $@
ifdef TRAVIS
	$(NODE_BIN_DIR)/karma start karma.conf-travis.js
else
	$(NODE_BIN_DIR)/karma start karma.conf-base.js
endif
	$(NODE_BIN_DIR)/istanbul report --dir $@/coverage --root $@ html
	touch $@

build/macgyver.js: $(covered_files)
	mkdir -p $(dir $@)
	$(NODE_BIN_DIR)/webpack \
		--entry=./build/covered/lib/macgyver.js \
		--output-library=macgyver \
		--output-library-target=umd \
		--output-filename=$@

$(covered_files): build/covered/%.js: %.js
	mkdir -p $(dir $@)
	$(NODE_BIN_DIR)/istanbul instrument $^ --output $@
