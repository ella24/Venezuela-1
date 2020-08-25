# WordPress

Here is the work-in-progress version of this feature in WordPress: [Frontend](https://cpj-preprod.go-vip.net/2020/08/venezuelan-radio-shutdowns/), [Backend](https://cpj-preprod.go-vip.net/wp-admin/post.php?post=42780&action=edit)

In this folder we have `index.html` which is the HTML put inside the "Custom HTML" block in the WordPress post. We also have `extra_head.html` which contains the stylesheets and JavaScript code we will need for the interactive.

`extra_head.html` includes the contents of `src/assets/main.css` as well as `src/scrollytelling.js`.

Images in `index.html` have been updated to point ot the Github CDN versions. For a production article we would probably want to upload the images to WordPress and then replace the image URL's with the URL's from the WordPress server.
