function AboutMe (){

    return (
    <div className="aboutme">
        <h1 className="title">About me</h1>
        <div className="aboutme__main">
            <div>
                <div className="aboutme__pic">
                    <img src="./img/KakaoTalk_20220730_112627735.jpg"/>
                    <img src="./img/profile.jpg"/>
                </div>
                <div className="aboutme__introduce">
                    <ul>
                        <li>お名前</li>
                        <li>年齢</li>
                        <li>趣味</li>
                    </ul>
                </div>
            </div>
            <div className="aboutme__story">
                <p>
                    私は韓国で宣文大学大学卒業後、1年間韓国貿易業界のSmartCloudITMaster過程に入りITの業幾を終了し
                    日本に来てITの業務に努めました。私は小さい時から絵を描く事や漫画が好きなので何かを書くのが好きでした。
                    その中でフロントエンド開発の話を知り合いから色々教えてもらえました。フロントエンド開発で画面作成が可能し、
                    SCSSでデザインができましたので仕事が終わった後、独学でフロントエンドの技術を学びました。
                    これからはフロントエンドに挑戦たいです。
                    よろしくお願いします。
                </p>
            </div>
        </div>
    </div>
    
    )
}

export default AboutMe;