<%= copyright_block("#{namespace_class_name} Unit Test") %>
/*globals <%= namespace %> module test ok equals same stop start */

module("<%= namespace_class_name %>");

// TODO: Replace with real unit test for <%= namespace_class_name %>
test("test description", function() {
  var expected = "test";
  var result   = "test";
  equals(result, expected, "test should equal test");
});

