                    </div><!-- /.post-contents -->
                </article><!-- /.post -->

	    </div><!-- /.l-container -->
    </main>
    <div class="echo-sub" role="complementary">
        <div class="l-container">

            <?php
                $echo_dir = dirname($_SERVER["SCRIPT_NAME"]);

                if( preg_match( '/styleguide/', $echo_dir ) ) {
                    echo '<h2 class="echo-sub-title">Style guide</h2>';
                    include('../doc_include/sitemap_styleguide.inc');
                }
                if( preg_match( '/docs/', $echo_dir ) ) {
                    echo '<h2 class="echo-sub-title">Documentation</h2>';
                    include('../doc_include/sitemap_docs.inc');
                }
            ?>

	    </div><!-- /.l-container -->
    </div><!-- /.echo-sub -->

    <?php include('../doc_include/footer_copyright.inc'); ?>

</div><!-- /.l-document -->
</body>
</html>
