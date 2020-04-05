# Owneymail

powered by owneymail.com


Email marketing via Amazon SES, Sendgrid, Mailchimp. editor

# Installation
Install the dependencies and devDependencies and start the server.
```sh
$ npm install owneymail
```

# USAGE
Install the dependencies and devDependencies and start the server.
```sh
const owneymail = require('owneymail');
const owneyService = new owneymail(OWNEYMAIL_API_KEY)

owneyService.templateCode("TEMPLATE_CODE")
    .fromName("Lorem Ipsum")
    .fromEmail("hi@loremipsum.com")
    .subject("Lorem Ipsum Test Email")
    .context({"samplecontext1": "samplevalue1"})
    .to(["one@loremipsum.com", "two@loremipsum.com"])
    .cc(["alpha@loremipsum.com", "beta@loremipsum.com"])
    .bcc(["un@loremipsum.com", "duex@loremipsum.com"])
    .send();
```