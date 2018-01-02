class MarkdownRenderer < Redcarpet::Render::HTML
  def block_code(code, language)
    formatter = Rouge::Formatters::HTML.new(wrap: false)
    if language and language.include?('example')
      lexer = Rouge::Lexer.find('html')
      '<div class="example">' + code + '</div>' + '<div class="codeblock"><pre>' + formatter.format(lexer.lex(code)) + '</pre></div>'
    else
      lexer = Rouge::Lexer.find('html')
      '<div class="codeblock"><pre>' + formatter.format(lexer.lex(code)) + '</pre></div>'
    end
  end
end
