require 'html/proofer'
# rake test
desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./_site", {
    href_ignore: ['http://localhost:4000'],
    file_ignore: [/.*node_modules.*/],
    check_html: true,
    check_favicon: true,
    empty_alt_ignore: false
  }).run
end
