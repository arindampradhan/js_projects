Template.blog.events({
    'submit #blogForm':function (e) {
        e.preventDefault();
        var title = $("#blogtitle").val();
        var body = $("#blogbody").val();
        if (title.length && body.length) {
            Meteor.call('submitPost',title,body);
        }else{
            alert("Please fill all the fields");
        }
    }
})


Template.listblogs.blogs = function () {
    return Blogs.find();
}
