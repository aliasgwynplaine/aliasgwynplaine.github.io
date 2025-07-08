---
layout:     post
title:      entonces... cómo hacer respuestas sin ser chabacano
date:       2025-04-16 13:25:59 +0200
tags:       en es hacking
author:     gwynplaine
---

> **palabras clave**: hacking hack hacker hackear keylogger como hackear como ser hacker como hackear el facebook de mi pareja como hackear whatsapp o wasap guia rapida para ser hacker 100% real no fake

Una vez leí un par de artículos que hablaban sobre [cómo hacer "preguntas inteligentes"](https://sindominio.net/ayuda/preguntas-inteligentes.html){:target="\_blank"} y otro sombre [cómo ser un hacker](https://biblioweb.sindominio.net/telematica/hacker-como.html){:target="\_blank"}. Aunque esté de acuerdo con algunas ideas que los artículos ilustran (investigar antes de preguntar, precisión técnica al hacerlo), hay ciertos aspectos que me causan una incómoda impresión: la ociosa categorización de _hacker_-_cracker_ (no pienso desarrollar esto), _not a libertarian telling me how i should use my freedom_, entre otros. Pero sobre todo me incomoda lo que parece ser un intento de justificación de conducta hostil, particularmente con las personas que se encuentran empezando.

Lo que sucede cuando haces preguntas sobre temas que no conoces es que ser plenamente consciente de las cosas que no sabes que no sabes es algo realmente difícil; y, desafortunadamente, es algo que puede ser fundamental a la hora de hacer _preguntas inteligentes_.

Este par de artículos emergió de mis recuerdos mientras navegaba reddit y una respuesta capturó mi atención. Alguien preguntó lo siguiente, ASIS:

---

## How can I write my own remote keylogger in C ?

I was looking for an interesting project to pass time with and decided upon writing my own remote keylogger in C. I do not want a full tutorial with the code already written, I am just looking for guidelines/keywords as I have no idea where to start from! I want it remote so I'll probably need to learn some networking in C so that's a start I guess. Do you guys have any tips to get started or resources ?

---

Y, por supuesto, alguien respondió lo siguiente:

![annoying guy](/assets/img/ep/annoying.png)

Por el contrario, otro usuario dio una respuesta realmente extensa y detallada sobre el proceso de concepción, creación, distribución del keylogger, y, además, precauciones a tener en cuenta y obtención de ganancias. La respuesta en cuestión, se encuentra [aquí](https://www.reddit.com/r/HowToHack/comments/8s335y/how_can_i_write_my_own_remote_keylogger_in_c/), pero me tomé la libertad de copiar y pegar la respuesta ASIS:

---
This is a very complex application to design, depending on your desired level of security. Of course, I am assuming you want to create _an actual key logger_. If you just want a toy project, google basic C networking and find a C snippet of a key logger (see below).

If you absolutely insist on doing the key logger by yourself, you need to research your specific operating system. Study system architecture and learn how to use system hooks and DLLs (for windows), and read the API on keyboard input. I expect it to be quite hard to pull off reliably, though I haven't tried myself.

I'll try to break down the main steps, keeping security in mind for each step.

**How to log the actual keystrokes**

It is very operating system dependent. Start with your own operating system and develop the remaining infrastructure described here -- then expand operations to other operating systems.

Here is a small working example for Linux: [https://github.com/SCOTPAUL/keylog](https://github.com/SCOTPAUL/keylog)

Since developing a keylogger _and distributing it_ is highly illegal, I encourage you to take proper precautions. If you are simply looking for the end product, keep in mind this can be purchased easily on the dark web. However, if you are looking for a coding challenge, I'll sketch out some beginner's tips.

**Getting the server**

- Install TAILS on a USB drive
    
- Plug drive into burner PC and boot up TAILS
    
- Purchase your favorite cryptocurrency and store in an encrypted wallet
    
- Clean the money using a tumbler, sending the money _to a new wallet_
    
- Go to the dark web and purchase a server, using money from the new wallet, in a country known for its lack of cooperation with global authorities (Russia, or similar).
    
- You should generate an admin SSH user with a long randomly generated password that you only write down on paper -- never store digitally.
    

**Getting a VPN**

- Using similar means of acquiring cryptocurrency, you should purchase a VPN from the dark net as well. It is important to choose a VPN with a history of not colluding with the government,
    

**Client application**

- Generate private/public PGP key pair, and store the private key on an encrypted hard drive.
    
- Write an application with a buffer of pressed keystrokes, which is being filled by your actual keylogger. Whenever the buffer gets large enough, encrypt the contents of the buffer _using the public key you just generated,_ and send it to aforementioned server using a TLS connection through the VPN you just purchased.
    

I cannot stress how important it is that your communication to the server is a) encrypted, and b) performed through a VPN. Otherwise you'll be easy to catch, or at least to simply destroy your server. Alternatively, use an overlay network such as TOR and run a master node on the remote server, though it might be harder to pull off.

Also your messages need to have a static header (the same for all messages).

**Server application**

- The server should run a server on an open port. The server should listen for incoming connections, and upon client request attempt to decrypt the received message _using the PGP private key_. If the decrypted message has the predefined header, then append the decrypted contents (ie. the keylogged data) to a global file.
    

It is important that all your communication to the server happens through a VPN. Preferably another VPN than the one bought using cryptocurrency, and preferably one with history of non-cooperation with governments.

**Distributing the key logger**

You want to distribute malware to people. Again you want to purchase a server, preferably a different one than before. The most obvious way to do this is _**porn**_. You want to design a web site with actual porn, however there is a sneaky little download you have install before you can play the content, or something along those lines.

Don't try to make it too sophisticated -- target the dumb internet users, they'll also be less likely to report you to the authorities and make your venture last longer. In fact, I read an article that says spam producers intentionally make their spam messages so only stupid people will fall for them because it makes them more money.

**Now I have a bunch of key logging data, what to do?**

Now that you have a bunch of data you want to mine it for valuable content and I'll assume you want to sell it for profit. There are several paths you can go down, depending on your aptitude for machine learning. I have highlighted the two most obvious:

- Selling the raw data
    
    - \+ Easy
        
    - \- Low $ / word
        
- Mining for passwords
    
    - \- Hard
        
    - \+ High $ / word
        

Of course, when selling the data, you should market it properly, and you should generate a vendor profile on a high-profile dark net market.

Good luck.

---

Hermoso. Desproporcionado, pero hermoso.


Es interesante ver una respuesta llena de información que el OP "no pidió". Al margen de lo ético, la respuesta es realmente muy buena: informativa, cortés, muy detallada, muy llena de información práctica. Es del tipo de respuestas que me hubiera gustado encontrar cuando empecé a aprender sobre computadoras.

En ese entonces, la información de calidad en español escaseaba y si te atrevías a preguntar en algún foro o canal IRC, podías encontrarte con respuestas desagradables y ataques personales gratuitos la mayor parte del tiempo. La verdad es que las comunidades de hackers estaban llenas de latosos y chilmoleros.

Los hackers respetan (o dicen respetar) el conocimiento técnico y la habilidad. Sin embargo, es fácil encontrar situaciones en las que esta característica particular se entremezcla con el ego y conducta prepotente, y de maneras muy sutiles; _e. g._, el famoso dicho de "el respeto se gana". Suena hasta romántico hasta que te das cuenta de que se usa para faltar el respeto a personas como los _novicios_, a los cuales ni siquiera les han dado la oportunidad de demostrar que pueden ganárselo. Después de todo, no queda claro quién decide cómo debe ganarse.

Después de pasar por la étapa pre-universitaria y universitaria en "una de las mejores universidades" de mi país (donde las notas y el respeto parecían tener una relación directamente proporcional, para algunos), me di cuenta de que los pedantes se encuentran en todos lados. Esto, sumado a la agradable experiencia de formar parte de [tilde.town](https://tilde.town), me hizo comprender que el respeto, entendido como el valor que te permite reconocer a otra persona y sus derechos (como me dijo M., alguna vez, **el respeto que tenemos por una persona por ser _persona_**), no se gana, es necesario para mantener una comunidad (y una sociedad) sana.

Afortunadamente, las cosas están cambiando; estamos en el 2025 y algunas cosas ya han cambiado. Ya no es verdad que falte información [[1]](https://www.exploit-db.com/papers/41914), aunque tal vez esta sea no muy obvia de encontrar para algunos, sobre todo los que se encuentran empezando. Cada vez hay más personas que toman conciencia sobre las conductas innecesariamente agresivas en las comunidades, e incluso las confrontan. Y sobre todo, ahora hay mucha divulación y desmitificación en relación con el hackeo de computadoras, por lo que ser un _h4x0r_ no es algo que se mire con los mismos ojos que antes y eso les ha _bajado un poco la espuma al chocolate_.

Si eres un _novicio_, te deseo toda la suerte del mundo. No permitas que nadie te imponga cómo usar los conocimientos que adquieres, ni cómo ejercer tu libertad; aunque pronto aprenderás que hay reglas que debes respetar y que siempre habrá consecuencias por tus acciones. Aprende todo lo que puedas de los demás y de sus errores, y no olvides cómo empezaste ni cómo te gustaría que te enseñen lo que vas a aprender.    

Y, finalmente, si eres un hacker experimentado, como dice un buen amigo mexicano: no seas culo.


---

[1] https://www.exploit-db.com/papers/41914
