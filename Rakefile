desc 'build files'
task 'build' do
  sh 'grunt'
  sh 'jekyll'
end

desc 'watch files'
task 'watch' do
  [
    'grunt watch',
    'jekyll --auto',
  ].each do |cmd|
    fork { sh "#{cmd}" }
  end
  Process.waitall
end
