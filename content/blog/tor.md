---
title: "What Is Tor and Should We Use It?"
description: "What is Tor and why do we need it? Is it actually worth using? A beginner's guide to using Tor browser."
date: 2020-03-03
---
In October I started contributing to The Tor Project as an Outreachy applicant. Though I didn’t get an internship it was a good chance and opportunity to learn much more about Tor and internet privacy. It helped me to realize how many untruths persist about Tor in modern society. It’s a common thing to think that the Tor browser is used only for crime, Tor was developed by the US government, Tor is illegal to download and so on. The factors causing the misconceptions are a lack of information, misunderstanding, or government propaganda.

#### So what is Tor and should we use it?

More than seventeen years have passed since a couple of MIT grads and researchers at the US Naval Research Lab released an early version of Tor (*The Onion Router*), an experiment in granting anonymity to anyone online. Today Tor has run by millions of users worldwide. The original project has been endlessly broken and fixed again, but it remains the strongest tool for online privacy and It’s more versatile than ever before.

Tor Browser helps to keep you safe on the Internet, protects your privacy and anonymity. Tor secures your connection with three layers of encryption. It works by sending your traffic through three random servers, also named [*relays*](https://community.torproject.org/relay/), run by volunteers all around the world before sending it on to the destination. It prevents somebody watching your Internet connection from learning what sites you visit, and it prevents the sites you visit from learning your physical location.

Tor also protects you against a common form of Internet surveillance known as ["*traffic analysis*"](https://en.wikipedia.org/wiki/Traffic_analysis). Traffic analysis can be used to infer who is talking to whom over a public network. Knowing the source and destination of your Internet traffic allows others to track your behavior and interests. This can impact your checkbook if, for example, an e-commerce site uses price discrimination based on your country or institution of origin. Tor makes all its users look the same which confuses the observer and makes you anonymous. You can bypass the censorship without being worried about the censor knowing what you do on the internet. The ads won’t follow you everywhere for months, starting when you first clicked on a product. 

The aim of Tor is to improve your privacy by sending your traffic through proxies. Your communication is encrypted in many layers and routed via many hops through the Tor network to the final receiver. Note that all your local ISP can observe now is that you are communicating with Tor nodes. Similarly, servers on the Internet see that they are being contacted by Tor nodes.
 
Generally speaking, Tor aims to solve three privacy problems:

First, websites and other services can use your location to build databases about your habits and interests. Tor prevents it. With Tor, your Internet connections don't give you away by default - now you have the ability to choose, for each connection, how much information to reveal.

Second, Tor prevents people from watching your traffic locally (such as your ISP or someone with access to your home wifi or router) from learning what information you're fetching and where you're fetching it from. It also stops them from deciding what you're allowed to learn and publish. If you can get to any part of the Tor network, you can reach any site on the Internet.

Third, Tor routes your connection through more than one Tor relay so no single relay can learn what you're up to. Because these relays are run by different individuals or organizations, the distributed trust provides more security than the old one-hop proxy approach.
 
#### Are you totally anonymous using Tor?

**No**.

First, Tor protects network communications. It separates who you are from where you are going on the Internet. What content and data you transmit over Tor is controlled by you. If you login to Google or Facebook via Tor, the local ISP or network provider doesn't know you are visiting Google or Facebook. Google and Facebook don't know where you are in the world. Yet since you have logged into their sites, they know who you are. If you don't want to share information, you are in control.

Second, active content, such as Java, JavaScript, Adobe Flash, ActiveX controls, VBScript are binary applications. These binary applications run as your user account with your permissions in your operating system. This means these applications can access anything that your user account can access. Some of these technologies, such as Java and Adobe Flash, for instance, run in what is known as a virtual machine. This virtual machine may have the ability to ignore your configured proxy settings, and therefore bypass Tor and share information directly to other sites on the Internet. The virtual machine may be able to store data, such as cookies, completely separate from your browser or operating system data stores. So these technologies must be disabled in your browser to use Tor. 

If you start to use Tor, you must also keep up with the regular updates. New methods of circumventing encryption and breaching protocols come up every day. To counter this, Tor frequently updates its protocols and ensures the greatest anonymity for users. Make sure you stay updated with the latest trends.

Tor is a great way for you to remain anonymous and enjoy everything that the Internet has to offer. If you live in a country where there are widespread online restrictions, you can use Tor with a VPN to stay truly anonymous and away from problems. Though you should know how to configure both in a way that doesn’t compromise your privacy. 
 
Whatever your reason for using Tor might be, it is a viable option for many and if you are as concerned about your privacy as many people around the world, you should definitely give it a try.

Tor browser is currently available on [Windows](https://www.torproject.org/download/), [Linux](https://www.torproject.org/download/), and [macOS](https://www.torproject.org/download/).
 
There is a version of Tor Browser for [Android](https://www.torproject.org/download/#android) and [The Guardian Project](https://guardianproject.info/) also provides the [Orbot](https://play.google.com/store/apps/details?id=org.torproject.android) app to route other apps on your Android device over the Tor network.

There is no official version of Tor for iOS yet, though they recommend [Onion](https://onionbrowser.com/) Browser.
