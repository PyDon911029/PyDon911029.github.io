document.title = user_name + "Co.Lt";
document.getElementById("logo-title").innerHTML = user_name + "Co.Lt";
document.getElementById("header-title").innerHTML = user_name;
document.getElementById("profile-title").innerHTML = profile_title;

// header contact list
for (let i = 0; i < contact_info.length; i++) {
    var temp = document.getElementById("header-contact-list").innerHTML;
    if(contact_info[i].visible)
    document.getElementById("header-contact-list").innerHTML = temp 
        + "<a class='btn btn-default btn-round btn-lg btn-icon' href='" 
        + contact_info[i].url 
        + "' rel='tooltip' title='" 
        + contact_info[i].title 
        + "'><i class='fa fa-" 
        + contact_info[i].key + "'></i></a>";
}

// footer contact list
for (let i = 0; i < contact_info.length; i++) {
    var temp = document.getElementById("footer-contact-list").innerHTML;
    if(contact_info[i].visible)
    document.getElementById("footer-contact-list").innerHTML = temp 
        + "<a class='cc-" 
        + contact_info[i].key 
        + " btn btn-link' href='" 
        + contact_info[i].url 
        + "'><i class='fa fa-" 
        + contact_info[i].key 
        + " fa-2x ' aria-hidden='true'></i></a>";
}

// about
document.getElementById("about-title").innerHTML = about_title;
document.getElementById("about-content").innerHTML = about_content;

// basic information
document.getElementById("basic-info").innerHTML = "<div class='h4 mt-0 title'>" + basic_info.title + "</div>";
for (let i = 0; i < basic_info.content.length; i++) {
    var temp = document.getElementById("basic-info").innerHTML;
    if(basic_info.content[i].visible)
    document.getElementById("basic-info").innerHTML = temp 
        + "<div class='row mt-3'><div class='col-sm-4'><strong class='text-uppercase'>" 
        + basic_info.content[i].title 
        + ":</strong></div><div class='col-sm-8'>" 
        + basic_info.content[i].content 
        + "</div></div>";
}

// skill set
for (let i = 0; i < skill_set.length; i++) {
    var skill_set_tmp = document.getElementById("skill-set").innerHTML;
    if (skill_set[i].visible) {
        skill_set_tmp = skill_set_tmp 
            + "<div class='text-left mb-4 title'>" 
            + skill_set[i].title 
            + "</div>";
        skill_set_tmp = skill_set_tmp 
            +   "<div class='card' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>\
                    <div class='card-body'>\
                        <div class='row'>";
        for (let j = 0; j < skill_set[i].content.length; j++) {
            if (skill_set[i].content[j].visible) {
                skill_set_tmp = skill_set_tmp 
                    +   "<div class='col-md-3'>\
                            <div class='progress-container progress-primary'>\
                                <span class='progress-badge'>" + skill_set[i].content[j].title + "</span>\
                                <div class='progress'>\
                                    <div class='progress-bar progress-bar-primary' \
                                        data-aos='progress-full' \
                                        data-aos-offset='10' \
                                        data-aos-duration='2000' \
                                        role='progressbar' \
                                        aria-valuenow='" + skill_set[i].content[j].percent + "' \
                                        aria-valuemin='0' \
                                        aria-valuemax='100' \
                                        style='width: 80%;'>\
                                    </div>\
                                    <span class='progress-value'>80%</span>\
                                </div>\
                            </div>\
                        </div>"
            }
        }
        skill_set_tmp = skill_set_tmp 
            + "<div/><div/><div/>";
        document.getElementById("skill-set").innerHTML = skill_set_tmp;
    }
    
}
// portfolio

// work experience
for (let i = 0; i < experience.length; i++) {
    var experience_tmp = document.getElementById("_experience").innerHTML;
    if (experience[i].visible) {
        experience_tmp = experience_tmp 
            +   "<div class='card'>\
                    <div class='row'>\
                        <div class='col-md-3 bg-primary' data-aos='fade-right' data-aos-offset='50' data-aos-duration='500'>\
                            <div class='card-body cc-experience-header'>\
                                <p>" + experience[i].period + "</p>\
                                <div class='h5'>" + experience[i].company + "</div>\
                            </div>\
                        </div>\
                        <div class='col-md-9' data-aos='fade-left' data-aos-offset='50' data-aos-duration='500'>\
                            <div class='card-body'>\
                                <div class='h5'>" + experience[i].role + "</div>\
                                <p>" + experience[i].content + "</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>"
        document.getElementById("_experience").innerHTML = experience_tmp;
    }
    
}

// education
for (let i = 0; i < education.length; i++) {
    var education_tmp = document.getElementById("_education").innerHTML;
    if (education[i].visible) {
        education_tmp = education_tmp 
            +   "<div class='card'>\
                    <div class='row'>\
                        <div class='col-md-3 bg-primary' data-aos='fade-right' data-aos-offset='50' data-aos-duration='500'>\
                            <div class='card-body cc-education-header'>\
                                <p>" + education[i].period + "</p>\
                                <div class='h5'>" + education[i].level + "</div>\
                            </div>\
                        </div>\
                        <div class='col-md-9' data-aos='fade-left' data-aos-offset='50' data-aos-duration='500'>\
                            <div class='card-body'>\
                                <div class='h5'>" + education[i].degree + "</div>\
                                <p class='category'>" + education[i].company + "</p>\
                                <p>" + education[i].content + "</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>"
        document.getElementById("_education").innerHTML = education_tmp;
    }
    
}

// reference

// contact me

// footer info
document.getElementById("copyright").innerHTML = "&copy; " 
    + user_name 
    + " CV. All rights reserved.<br>Design - <a id='designer' class='credit' href='" 
    + designer_url 
    + "' target='_blank'>" 
    + designer 
    + "</a>";