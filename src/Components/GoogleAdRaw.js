const GoogleAdRaw = () => {
    return (
        <>
            <div dangerouslySetInnerHTML={{
                __html: `
        <!-- Google AdSense code goes here -->
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-7288998721146185"
             data-ad-slot="8292285304"
             data-ad-format="auto"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      `
            }}/>
        </>
    )
}
export default GoogleAdRaw