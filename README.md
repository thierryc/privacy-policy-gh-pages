# privacy-policy-gh-pages

## Privacy policy for app template

Nothing fancy here. Just personal tool free to use and share.

Just a repository to host your iOS (or Android soon) App Privacy policies on a Github Pages.

### Original Privacy Policy repository

https://github.com/thierryc/privacy-policy-gh-pages

## How it works

## Clone the privacy policy repository

Clone [this repository](https://github.com/thierryc/privacy-policy-gh-pages) to your local machine and run `npm install` to install the dependencies.

### Github CLI

```bash
gh repo clone thierryc/privacy-policy-gh-pages
```

### Git clone SSH

```bash
git clone git@github.com:thierryc/privacy-policy-gh-pages.git
```

### Git clone HTTPS

```bash
git clone https://github.com/thierryc/privacy-policy-gh-pages.git
```

## Edit Package JSON file

Edit the `./package.json` and change the name of the author, the email, the version, and any other personal information.

```json
"author": {
    "name": "_author_mame_",
    "email": "author-email@email.com",
    "url": "https://author-website.com"
  },
```

## Edit Application JSON file

Rename `application.template.json` to `application.json` and edit it to your needs.

```json
"appName": "_Aplication_Name_",
"devices": ["iPhone", "iPad"],
"platforms": ["iOS"],
"appVersion": "1.0.0",
"github": {
  "user": "Github_User"
}

```

## Edit the Privacy policies

Edit the Privacy policies to add your application policies.

`./src/privacy-policy.md`

any data in the `privacy-policy.json` and `package.json` will be used to generate the privacy policy.

`./src/privacy-policy.md`

The MD is parsed by a Lodash.template function. The template is a function that takes a data object and returns a string.

`<%= package.license %>` includes the license.

### Prefix

Package data are prefixed: `package`

Application data are prefixed: `app`

### How to use

Then run `npm run build` to build the page.

Run `npm run serve` to preview the page.

Then run `npm run deploy` to deploy the app to Github Pages.

### Tips

Run `npm run watch` to rebuild the page at any modification.

## Github Pages URL

### this repository example

https://thierryc.github.io/privacy-policy-gh-pages/

https://__github.user.slug__}.github.io/__databases.package.name__/}

## Disclaimer

Note: The provided MD file is an example of a basic Privacy Policies Page for a free application. I have no legal expertise.
Please submit issues if you have some pieces of advice to share. TIA.

## License

MIT licensed

## Deploying to github pages with custom domain

Modify the deployment line to your deploy script if you use custom domain. This will prevent the deployment from removing the domain settings in GitHub.

`echo 'your_cutom_domain.online' > ./gh-pages/CNAME && npm run deploy`

## Links and Thanks

- gh-pages: https://github.com/tschaub/gh-pages

## Other Privacy policy for app template

Please summit a [new issue](https://github.com/thierryc/privacy-policy-gh-pages/issues/new/choose) to add your repository or page here.