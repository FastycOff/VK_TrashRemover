function GiveNeedParent(a)
{
    if (a.parentNode != null & a.parentNode.classList.contains("feed_row"))
    {
        return a.parentNode;
    }
    else
    {
        return GiveNeedParent(a.parentNode);
    }
    
}

function AdRemoveA()
{
    let a = document.getElementsByTagName("a");

    for (let i = 0; i < a.length; ++i) {
        if (a[i].innerHTML === "Рекламная запись") {
            let card = GiveNeedParent(a[i]);
            card.setAttribute("style", "display: none !important;");
        }
    }
}

function AdRemoveDiv()
{
    let c = document.getElementsByClassName("ads_ad_age_restriction  adaptive_ad inline");

    for (let i = 0; i < c.length; ++i) 
    {
        let card = GiveNeedParent(c[i]);
        сard.setAttribute("style", "display: none !important;");
    }
}

function removeTrash() 
{
    let storyCreate = document.getElementsByClassName("stories_feed_preview_item stories_feed_create ")
    let chat = document.getElementsByClassName("chat_onl_inner");
    let ads = document.getElementById("ads_left");
    let rightmenu = document.getElementById("narrow_column");
    let news = document.getElementById("l_nwsf");
    let photos = document.getElementById("l_ph");
    let videos = document.getElementById("l_vid");
    let clips = document.getElementById("l_svd");
    let games = document.getElementById("l_ap");
    let mk = document.getElementById("l_mk");
    let apps = document.getElementById("l_mini_apps");
    let job = document.getElementById("l_job");
    let favorite = document.getElementById("l_fav");
    let files = document.getElementById("l_doc");
    let app1 = document.getElementById("l_app6911063");
    let app2 = document.getElementById("l_app6915965");
    let ts_wrap = document.getElementById("ts_wrap");
    let divs = document.getElementsByClassName("more_div");
    let about = document.getElementsByClassName("left_menu_nav_wrap");
    let post = document.getElementById("submit_post_box");

    for (let index = 0; index < divs.length; index++) 
    {
        divs[index].setAttribute("style", "display: none !important;");
    }
    if (rightmenu != null)
    {
        rightmenu.setAttribute("style", "display: none !important;");
    }

    post.setAttribute("style", "display: none !important;");
    about[0].setAttribute("style", "display: none !important;");
    ts_wrap.setAttribute("style", "display: none !important;");
    ads.setAttribute("style", "display: none !important;");
    news.setAttribute("style", "display: none !important;");
    photos.setAttribute("style", "display: none !important;");
    videos.setAttribute("style", "display: none !important;");
    clips.setAttribute("style", "display: none !important;");
    games.setAttribute("style", "display: none !important;");
    mk.setAttribute("style", "display: none !important;");
    apps.setAttribute("style", "display: none !important;");
    job.setAttribute("style", "display: none !important;");
    favorite.setAttribute("style", "display: none !important;");
    files.setAttribute("style", "display: none !important;");
    app1.setAttribute("style", "display: none !important;");
    app2.setAttribute("style", "display: none !important;");
    chat[0].setAttribute("style", "display: none !important;");
    storyCreate[0].setAttribute("style", "display: none !important;");


}


removeTrash();

setInterval(function () {
    AdRemoveA();
    AdRemoveDiv();
}, 350)
