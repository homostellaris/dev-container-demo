import assert from 'assert';
import prettify from './prettify.mjs';

describe("When ugly JSON is passed", () => {
	it("pretty JSON should be returned", done => {
		const json = '{"url":"https://www.getadministrate.com/careers/", "company":"Administrate", "location": "Edinburgh"}'
		prettify(json, prettyJson => {
			assert.equal(prettyJson, '{\n  "url": "https://www.getadministrate.com/careers/",\n  "company": "Administrate",\n  "location": "Edinburgh"\n}\n');
			done();
		});
	});
});

describe("When the sort=true is passed", () => {
	it("the returned JSON should have keys sorted alphabetically", done => {
		const json = '{"url":"https://www.getadministrate.com/careers/", "company":"Administrate", "location": "Edinburgh"}'
		prettify(json, prettyJson => {
			assert.equal(prettyJson, '{\n  "company": "Administrate",\n  "location": "Edinburgh",\n  "url": "https://www.getadministrate.com/careers/"\n}\n');
			done();
		}, true);
	})
});
