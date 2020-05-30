//This file outlines the catalogTemplate.
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
    <catalogTemplate><background><img src="${this.BASEURL}images/background.png" width="1900" height="1080" />
</background>
        <banner>
            <title> COLOR TV </title>
            </banner>
            <list>
                <section>
                    <listItemLockup>
                        <title>Türkçe</title>
                        <decorationLabel>5</decorationLabel>
                        //1. add from here
                        <relatedContent>
                            <grid>
                                <section>
                                    //2
                                    <lockup videoURL="https://2122248083.dogannet.tv//S2/HLS_LIVE/kanaldnp/playlist.m3u8">
                                        <img src="${this.BASEURL}images/kanalD.png" width="500" height="308" />
                                    </lockup>
                                       
                                    <lockup videoURL="http://trtcanlitv-lh.akamaihd.net/i/TRT1HD_1@181842/index_1500_av-b.m3u8">
                                        <img src="${this.BASEURL}images/trt1.png" width="500" height="308" />
                                    </lockup>
                                    
                                    <lockup videoURL="http://trtcanlitv-lh.akamaihd.net/i/TRTHABERHD_1@181942/master.m3u8">
                                        <img src="${this.BASEURL}images/trt-haber.png" width="500" height="308" />
                                    </lockup>


                                    <lockup videoURL="http://trtcanlitv-lh.akamaihd.net/i/TRTHABERHD_1@181942/master.m3u8">
                                        <img src="${this.BASEURL}images/trt-haber.png" width="500" height="308" />
                                    </lockup>


                                    <lockup videoURL="https://2122248091.dogannet.tv/S2/HLS_LIVE/cnn_turk/1000/prog_index.m3u8">
                                        <img src="${this.BASEURL}images/cnnTurk.png" width="500" height="308" />
                                    </lockup>
                                    
                                </section>
                            </grid>
                        </relatedContent>
                    </listItemLockup>

                    <listItemLockup>
                        <title>العَرَبِيَّة‎‎</title>
                        <decorationLabel>3</decorationLabel>
                        //1. add from here
                        <relatedContent>
                            <grid>
                                <section>
                                    //2
                                    <lockup videoURL="https://live.alarabiya.net/alarabiya/myStream_720p/playlist.m3u8">
                                        <img src="${this.BASEURL}images/Al_arabiya.png" width="500" height="300" />
                                    </lockup>
                                       
                                    <lockup videoURL="http://aljazeera-ara-apple-live.adaptive.level3.net/apple/aljazeera/arabic/appleman.m3u8">
                                        <img src="${this.BASEURL}images/aljazeera.png" width="500" height="308" />
                                    </lockup>
                                    
                                    <lockup videoURL="http://dmivll.mangomolo.com/dubaitv/smil:dubaitv.smil/playlist.m3u8">
                                        <img src="${this.BASEURL}images/dubaiTv.png" width="720" height="242" />
                                    </lockup>

                                    
                                </section>
                            </grid>
                        </relatedContent>
                    </listItemLockup>



                    <listItemLockup>
                        <title>English</title>
                        <decorationLabel>1</decorationLabel>
                        //1. add from here
                        <relatedContent>
                            <grid>
                                <section>
                                    //2
                                    <lockup videoURL="https://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-tv/global/263941/live_wa_s.m3u8">
                                        <img src="${this.BASEURL}images/NHK_World_Japan.png" width="617" height="151" />
                                    </lockup>
                                       

                                    
                                </section>
                            </grid>
                        </relatedContent>
                    </listItemLockup>



                </section>

            </list>
        </catalogTemplate>
    </document>`
}
