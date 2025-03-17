---
title: "StadiaPlus"
excerpt: "With 30 000 concurrent users, StadiaPlus was the leading Chrome-extension for Google's now retired Stadia-platform."
image: /portfolio/stadiaplus.webp
github: https://github.com/Mafrans/StadiaPlus
---

StadiaPlus was my first major project as a full stack developer, it started small but quickly grew to involve an API backend, a desktop daemon and hundreds of hours of reverse engineering.

*The pictures in this article are taken with permission from the brilliant [Marcus Billman](https://marcusbillman.se), who produced much of StadiaPlus's graphics.*

The idea behind StadiaPlus came to me at the end of 2019, about a month after Google released Stadia, their new platform which was poised to compete with Xbox and PlayStation. The platform released in a rushed shape and was missing many useful and sometimes integral features, to call it a rough launch is taking it lightly. The idea, simply, was to introduce a few of these simpler features (which Google's engineers had set aside to focus on larger, more important implementation problems) as a Chrome-extension.

Initially, the extension was very simple, a small clock in the top left while you played, simple shortcut buttons which moved you around the website. After some time, I noticed small user scripts and "hacks" floating around in community forums—with permission from the author, I decided to publish these as part of the extension.

From here, the project quickly derailed. It turns out that a *shocking* amount of users had been relying on these scripts, as Stadia's built in solution for detecting video protocol support was faulty, rendering most Linux users completely incapable of using the platform. The introduction of these scripts, which allowed users to manually override which protocol to use for video decoding, into StadiaPlus quickly made it the go-to tool for people with *any* video decoding issues to troubleshoot.

By then, I had noticed the popularity of the plugin and was working incessantly on a second version, one where I spent more time thinking about code structure.
The result wasn't really all that much better, in all honesty, but it *was* my first time working with TypeScript, and made me a considerably better web programmer. I released StadiaPlus 2.0 with a relatively cringey, obviously self-serving post which quickly became a little bit of a meme within the community (I was 17 and wrote the way 17-year olds do), nevertheless it was well received. Reviews started rolling in, and they were VERY positive, I even got contacted by a developer *at* Google regarding my work.

> “If you explore the Stadia+ project you will find two things, engineering talent and meticulous attention to detail.”

> – Kevin Aud, Developer at Google

---

> “Stadia+ Is the only way to get the best Stadia experience on Chrome, spectacular!!”

> – Riccardo, Stadia+ user

---

> “It integrates perfectly with the already existing Stadia Interface. Brilliant work.”

> – Waldo, Stadia+ user

It was about this time that I recruited long time friend and fellow UI designer [Marcus Billman](https://marcusbillman.se) initially only for some advice, but eventually to design the entire interface. His work on the project was incredible, and became an inspiration to go on a design journey of my own a few years later.

![StadiaPlus underwent several design revisions over its lifetime.](/portfolio/stadiaplus_progress.webp)

We were quite close to a 3.0 revamp of the entire project by the time Stadia was retired as a platform. You can see more about what that would've looked like on [his website](https://www.marcusbillman.com/portfolio/stadiaplus). It used a pretty sophisticated solution involving React portals and observers to improve the responsiveness of the UI. Attaching your own UI to an existing product is harder than it seems—one of the features in 3.0 I was most fond of was the way I managed to, through some 12 hours of digging through the minified source code, add a hook into the single-page router. This would've allowed the extension to natively switch pages, without having to reload the website (which was quite slow to load). I'm still a little sad that the community never got to see this version of the extension.

It's probably obvious in this text that I'm quite fond of this period of my life as a developer. I spent practically all my free time working on this, whether I was neck deep rummaging through `stadia-13nsk39.min.js`, designing new features, finding and squashing bugs, or just hanging out with the 1500 or so members I had amassed on my Discord server. I learned so much, so so much. Was this my peak? Probably not, that was probably that one time me and my school's choir performed for a nobel prize winner, but StadiaPlus is in a close second place. It got me my first software job, it set ablaze a fire in my heart, poured gasoline on my desire to *make things* and put them out there. If I could go back, I would. In a heartbeat.
