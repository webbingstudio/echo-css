<?php
if( !isset( $echo_path ) ) {
    $echo_path = '../';
}
?>
    <link id="echocss-core" rel="stylesheet" href="<?php echo $echo_path; ?>css/echo.min.css<?php echo '?var=' . date('YmdHis'); ?>">

    <script
        src="https://code.jquery.com/jquery-2.2.4.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossorigin="anonymous"></script>

    <script src="<?php echo $echo_path; ?>plugins/scrollto.min.js<?php echo '?var=' . date('YmdHis'); ?>"></script>
    <link rel="stylesheet" href="<?php echo $echo_path; ?>plugins/toggle.css<?php echo '?var=' . date('YmdHis'); ?>">
    <script src="<?php echo $echo_path; ?>plugins/toggle.min.js<?php echo '?var=' . date('YmdHis'); ?>"></script>

    <script src="<?php echo $echo_path; ?>styleguide/js/prism.js"></script>

	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

    <link rel="stylesheet" href="<?php echo $echo_path; ?>styleguide/css/styleguide.css<?php echo '?var=' . date('YmdHis'); ?>">

    <link rel="stylesheet" href="<?php echo $echo_path; ?>styleguide/css/prism.css">

    <meta name="twitter:site" content="@webbing_cms">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:image" content="https://echocss.webbingstudio.com/share/ogp.jpg">

    <link rel="apple-touch-icon" sizes="180x180" href="/share/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/share/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/share/favicon-16x16.png">
    <link rel="manifest" href="/share/site.webmanifest">
    <link rel="mask-icon" href="/share/safari-pinned-tab.svg" color="#333333">
    <link rel="shortcut icon" href="/share/favicon.ico">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-config" content="/share/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
