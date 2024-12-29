---
layout:     post
title:      Apuntes para un proyecto en Google Apps Script
date:       2024-12-28 21:53:59 -0500
categories: blog dev bot gas
author:     gwynplaine
---

Este artículo trata sobre los apuntes que hice al hacer un bot de Telegram 
usando Google Apps Scripts.

## Introducción: slice of life
Durante la pandemia, mi buen amigo O. V. se había quedado a cargo de la oficina 
de estadística de su organización y había tenido que enfrentarse a los problemas 
que emergieron con la virtualidad. Entre otros, uno de los problemas principales 
se trataba de la gestión de las grabaciones de las reuniones de la organización. 
La organización en cuestión era una que ya de por sí tenía poco presupuesto y 
que, además, había decidido usarlo en adquirir una licencia de zoom para llevar 
a cabo las susodichas reuniones. Sin embargo, se olvidaron de que las reuniones 
iban a ser guardadas y el acuerdo con zoom solo involucró un almacenamiento de 
las grabaciones por 48h (o 24h?). El punto: era necesario descargar las grabaciones 
del día para subirlas a algún otro lugar, menos efímero, todos los días. Estamos 
hablando de decenas de GB al día.

Por suerte, O. ya se había preparado, sin pretenderlo, para este momento. Como 
el tipo hábil, joven e inteligente que es, había tomado la higiénica decisión de 
reemplazar el sistema anterior de la oficina de estadística, que basaba casi 
todo su funcionamiento en la tecnología del papiro, las secretarias y las notas 
_post-it_, para reemplazarlo por uno de hojas de cálculo relacionadas entre sí. 
Y como la licencia de Microsoft&reg de la organización había caducado, se resolvió 
por hacerlo usando al suite de ofimática de Google.

Dado que gran parte de la información de la organización ya se encontraba en las 
hojas de cálculo de Google Spreadsheets, además del que el hecho, difícil de 
ignorar, de no tener presupuesto para un servidor adicional, decidió utilizar 
Google Apps Scripts para conectar la nube de Google Drive a la nube de Zoom y 
descargar las grabaciones de las reuniones directamente. Es decir, Google Apps 
Scripts se encargaba de gestionar automáticamente la copia de las grabaciones 
en cuanto estas estuvieran disponibles sin necesidad de un servidor adicional.

Esta idea, me encantó. De manera que tomé la decisión de aprenderlo y usar Google 
Apps Scripts como _backend_ para un bot de Telegram. Para sorpresa de nadie, esta 
idea ya había sido explorada por otras personas y había muchos tutoriales al 
respecto. Sin embargo, la documentación de Google Apps Scripts fue un poco 
confuza para mi. Dado que los tutoriales no se me dan bien, decidí publicar la 
lista de apuntes que hice para quien sea que se interese y necesite información 
rápida a la mano. 

## Pero... ¿cómo _exactamente_ funciona esto?
No pasó mucho antes de que me diera cuenta que escribir algo en este coso no era 
realmente de la misma manera a la que estaba habituado. He escrito más en C (y 
varianes) y python. Es importante darle una leída a las [referencias](https://developers.google.com/apps-script/guides/import-export?hl=es-419#features_and_limitations) aunque ya 
voy diciendo que hay cosas que no pueden encontrarse. Algunas notas que tomé:

+ No existe una función `main`. Todos los archivos se cargan en el mismo _namespace_ 
con cada ejecución.
+ No existe persistencia en ninguna variable local entre dos ejecuciones. Si 
necesitas persistencias, puedes usar archivos en GDrive, el servicio de [Caché](https://developers.google.com/apps-script/reference/cache?hl=es-419) o el servicio de [Propiedades](https://developers.google.com/apps-script/guides/properties?hl=es-419).
+ Hay cuotas y límites diarios. Puedes revisarlas [aquí](https://developers.google.com/apps-script/guides/services/quotas?hl=es-419).

## Google Apps Script. Herramientas e ideas.
[Aquí](https://github.com/oshliaer/google-apps-script-awesome-list) puedes 
encontrar una lista de herramientas, tutoriales e ideas para desarrollar con 
G.A.S..

## [Google claps](https://github.com/google/clasp)
Herramienta interesante para trabajar de manera local y luego subir los cambios 
al Proyecto Apps Scripts.

## Resultados y Conclusiones
G.A.S. funciona bastante bien como _backend_ para el [bot de Telegram](https://github.com/aliasgwynplaine/stonks_bot) que escribí. 
Se trata básicamente de un bot de gestión de gastos y lista de tareas. 
Aunque la lógica para programarlo sea un poco distinta en relación la forma en 
que se haría si se tratara de otras tecnologías, la integración natural con GDrive 
y con GSpreadsheets lo hace bastante útil para soluciones sencillas.

Que nadie te diga que no puedes usar una hoja de cálculo como base de datos.