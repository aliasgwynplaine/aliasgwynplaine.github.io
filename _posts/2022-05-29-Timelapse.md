---
layout:  post
title: Notas sobre Timelapse - HTB
date:  2022-05-29 21:53:59 -0500
tags: htb es
author: gwynplaine
---

Esta es una combinación de apuntes donde se condensan los conocimientos aprendidos al resolver la 
máquina Timelapse de HTB. Es posible que no todos los conocimientos expuestos sean estrictamente necesarios.

## Know-list

+ LDAP
	- nmap: script de enumeración `ldap-rootdse`
	- ldapsearch
	- ldap3 python lib
+ SMB
	- smbclient
	- crackmapexec
+ ZIP
	- john the ripper: zip2john
+ PKCS12
	- john the ripper: pfx2john
	- [crackpkcs12](https://github.com/crackpkcs12/crackpkcs12)
	- openssl: exportar "certificado" y "clave" de ficheros `.pfx`
+ Evil-WinRM
+ PowerShell
	- ¿Dónde puedo encontrar el historial de powershell?
+ Obtener contraseñas de usuarios locales (LAPS)

## Anexos

El siguiente código exporta las contraseñas a un fichero `.csv`. Cortesía de [Danny](https://smarthomepursuits.com/export-laps-passwords-powershell/).
```powershell
$computers = Get-ADComputer -Filter * -Properties ms-Mcs-AdmPwd, ms-Mcs-AdmPwdExpirationTime
$computers | Sort-Object ms-Mcs-AdmPwdExpirationTime | Format-Table -AutoSize Name, DnsHostName, ms-Mcs-AdmPwd, ms-Mcs-AdmPwdExpirationTime
$computers | Export-Csv -path "dump.csv" -NoTypeInformation
````

