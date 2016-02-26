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
  - person: david_jones
  - person: barry_harrison
---

> What You Want Is PCI Avoidance!

PCI compliance is a security standard designed to keep credit card information safe and avoid fraud. The Payment Card Industry Data Security Standard (PCI DSS) applies to companies of any size that accept credit card payments.

The problem is compliance can be difficult to achieve and hard to maintain. If your site &nbsp;doesn’t meet the current standard you can be subject to large fines or be denied the ability to process credit card payments.

Even if you are PCI compliant the system &nbsp;is far from perfect. There have been many instances where intruders have successfully stolen information while the business was completely PCI compliant.

> When people ask me about becoming PCI compliant, I prefer to flip the question. What can we do about PCI avoidance?

Many of our clients are able to completely avoid PCI compliance. So you’re probably wondering how can you avoid this burden? Before I can tell you how, first let’s understand how this system came about.

Let’s consider five alternatives for implementing payments on your store.

#### Solution A: The Simplest Thing Possible

[image 1 here]

In the early days of eCommerce (and sometimes even today) you see solutions like this. From the developer standpoint it’s the easiest solution you could implement with traditional payment providers.

Credit details are stored in your database like everything else. You contact the payment provider with those details and get a response. You don’t bother setting up HTTPS to encrypt the transmission from the browser to your server.

This solution is highly unsecure. Someone could intercept this information when it is transmitted or steal all the unencrypted credit card information stored in the database.

It’s worth noting though that this flow is good in terms of developer time spent. It’s also good for the user because they stay on your site throughout the process.

#### Solution B: Bank Hosted Payment Page

[image 2]

This solution came about when payment providers saw how bad Solution A was. It allows payment providers to have full control and confidence that credit card data is secure all along the way.

While this option is more secure, it forces your customers down a strange path. One moment they’re on your site, now they’re on some other site that doesn’t look like the page they came from and they’re being asked to enter payment information. This is going to negatively impact your conversion rate.

Some payment providers try to reduce this confusion by allowing the store owner to customise the header and footer of the payment page to make it feel as much as possible like you’re still on the original store website.

#### Solution C: Homegrown Encryption

[image 3]

With this solution credit card data is encrypted during every step of transmission and storage. This isn’t a bad solution however everyone will implement it differently.

There is also another problem. While you encrypted everything along the way, ideal security is much broader than that. Questions will arise like: Who has access to the server? How up to date is your software? Have you patched your servers with the latest fixes on the encryption protocols?

There’s a lot to be concerned about with this DIY solution. You’ll always be questioning if you’ve set up the encryption perfectly.

#### Solution D: PCI Compliance
&nbsp;

PCI compliance looks just like Solution C except you need to follow a long list of best practices to try and cover off all aspects of handling credit card data. You have the same setup but you’ll be subject to automated tests from the outside. You will also need to implement and follow security policies set out by PCI compliance. You’ll need to know exactly who has access to your server.

PCI compliance is a lot of responsibility and If you break one of the many rules you’ll be subject to fines. For a store owner that’s a risk and an expense. What would be preferable is something we know is both secure and low risk.

#### Solution E: PCI Avoidance (recommended)

[image 4]

Finally we’re at PCI avoidance. The payment provider is PCI compliant but you do not need to be. Why is that? Because no credit card data is transmitted or stored with you. Here’s how it works.

The customer’s credit card is sent directly to the payment provider. A token, not the actual credit card data, is then able to be stored in your database.

While being secure and avoiding PCI compliance, we’ve also given the customer a nice user experience by staying on your site at all times.

#### Conclusion

Use a payment provider that allows you to offer both a great user experience and eliminate the need for PCI compliance.

If your store is running on Spree or Solidus, you’ll be using the Active Merchant library to process payments. Stripe and Braintree are two common providers that support the PCI avoidance strategy outlined here.

You can rest easy knowing your site is secure, your customers are happy, and you’ve avoided the pain and expense of PCI compliance.

&nbsp;

&nbsp;