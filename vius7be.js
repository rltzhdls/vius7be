 <script>
$(document).ready(function () {
    const video = document.getElementById(&#39;vd&#39;);
    const source = document.getElementById(&#39;vds&#39;);
    let sourceChanged = false;

    video.oncanplaythrough = () =&gt; {
        if (!sourceChanged) { 
            setTimeout(() =&gt; {
                source.src = &quot;https://vod.plaync.com/lineage/2024/1030/v2/main_BG.mp4&quot;; 
                video.load(); 
                video.play(); 
                sourceChanged = true; 
            }, 5900); 
        }
    };
   });
   </script>