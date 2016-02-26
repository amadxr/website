---
layout: post
title: Forget PCI Compliance.
description: ''
author: david_jones
dropcap: true
read_count: true
highlightSyntax: false
feature_image: ''
editor: david_jones
additional_help:
  - person: barry_harrison
---

> What You Want Is PCI Avoidance!

PCI compliance is a security standard designed to keep credit card information safe and avoid fraud. The Payment Card Industry Data Security Standard (PCI DSS) applies to companies of any size that accept credit card payments.

The problem is compliance can be difficult to achieve and hard to maintain. If your site &nbsp;doesn’t meet the current standard you can be subject to large fines or be denied the ability to process credit card payments.

Even if you are PCI compliant, the system is far from perfect. There have been many instances where intruders have successfully stolen information while the business was fully PCI compliant.

> When people ask me about becoming PCI compliant, I prefer to flip the question. What can we do about PCI avoidance?

Our clients are able to completely avoid PCI compliance. So you’re probably wondering how can you sidestep this burden? Before I tell you, let’s first understand how this system came about.

Let’s consider five alternatives for implementing payments on your store.

#### Solution 1: The Simplest Thing Possible

[image 1 here]

In the early days of eCommerce (and sometimes even today) you see solutions like this. From the developer standpoint it’s the easiest solution you could implement with traditional payment providers.

Credit details are stored in your database like everything else. You contact the payment provider with those details and get a response. You don’t bother setting up HTTPS to encrypt the transmission from the browser to your server.

This solution is highly unsecure. Someone could intercept this information when it is transmitted or steal all the unencrypted credit card information stored in the database.

It’s worth noting though that this flow is good in terms of developer time spent. It’s also good for the user because they stay on your site throughout the process.

#### Solution 2: Bank Hosted Payment Page

[image 2]

This solution came about when payment providers saw how bad Solution A was. It allows payment providers to have full control and confidence that credit card data is secure all along the way.

While this option is more secure, it forces your customers down a strange path. One moment they’re on your site, the next they’re on another site (that doesn’t look like the page they came from) and they’re asked to enter payment information. This disconnect will negatively impact your conversion rate.

Some payment providers try to reduce this confusion by allowing the store owner to customize the header and footer of the payment page to make it feel as much as possible like you’re still on the original store website.

#### Solution 3: Homegrown Encryption

[image 3]

With this solution credit card data is encrypted during every step of transmission and storage. It isn’t a bad option, but everyone will implement it differently.

There's another problem. While everything is encrypted along the way, ideal security is much broader. Questions will arise like: Who has access to the server? How up to date is your software? Have you patched your servers with the latest fixes on the encryption protocols?

There’s a lot to be concerned about with this DIY solution. You’ll always be questioning if you’ve set up the encryption perfectly.

#### Solution 4: PCI Compliance

PCI compliance looks just like Solution C except you need to follow a long list of best practices to cover off all aspects of handling credit card data. You have the same setup but you’ll be subject to automated tests from the outside. You will also need to implement and follow security policies set out by PCI compliance. You’ll need to know exactly who has access to your server.

> PCI compliance is a lot of responsibility and if you break one of the many rules you’ll be subject to fines. That’s a risk and an expense. What would be preferable is a solution we know is both secure and low risk.

#### Solution 5: PCI Avoidance (recommended)

[image 4]

Finally we’re at PCI avoidance. The payment provider is PCI compliant but you do not need to be. Why is that? Because no credit card data is transmitted or stored with you. Here’s how it works.

The customer’s credit card is sent directly to the payment provider. A token, (not the actual credit card data) is then stored in your database.

While being secure and avoiding PCI compliance, we’ve also given the customer a better user experience by staying on your site at all times.

#### Conclusion

Use a payment provider that allows you to offer both a great user experience and eliminate the need for PCI compliance.

If your store is running on Spree or Solidus, you’ll be using the Active Merchant library to process payments. Stripe and Braintree are two common providers that support the PCI avoidance strategy outlined here.

You can rest easy knowing your site is secure, your customers are happy, and you’ve avoided the pain and expense of PCI compliance.

&nbsp;

&nbsp;