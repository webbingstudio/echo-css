                    </div><!-- /.echo-doc-post-contents -->
                </article><!-- /.echo-doc-post -->

	    </div><!-- /.echo-doc-container -->
    </main>
    <div class="echo-doc-sub" role="complementary">
        <div class="echo-doc-container">

            <?php
                $echo_dir = dirname($_SERVER["SCRIPT_NAME"]);

                if( preg_match( '/styleguide/', $echo_dir ) ) {
                    echo '<h2 class="echo-doc-sub-title">Style guide</h2>';
                    include('../doc_include/sitemap_styleguide.inc');
                }
                if( preg_match( '/docs/', $echo_dir ) ) {
                    echo '<h2 class="echo-doc-sub-title">Documentation</h2>';
                    include('../doc_include/sitemap_docs.inc');
                }
            ?>

	    </div><!-- /.echo-doc-container -->
    </div><!-- /.echo-doc-sub -->

    <?php include('../doc_include/footer_copyright.inc'); ?>

</div><!-- /.echo-document -->
</body>
</html>
