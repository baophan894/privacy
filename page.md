###

# Paths to policy pages

<a href="{app_legal_url}/privacy" target="_blank">Privacy Policy</a><br />
<a href="{app_legal_url}/terms" target="_blank">End User License Agreement</a><br />
<a href="{app_legal_url}/ccpa" target="_blank">CCPA Privacy Notice</a><br />
<a href="{app_legal_url}/copyrights" target="_blank">Copyrights Policy</a>

###

###

- Changes value of field app_name in file app.json into all folder privacy, ccpa, terms and copyrights
- Change all address contact in all file of folder privacy, ccpa, terms and copyrights to
  contact_address: support@phulinh.org in file app.json

###

      location /dronefly {
         index index.html;
      }
      location /dronefly/terms {
         index index.html;
      }
      location /dronefly/privacy {
         index index.html;
      }
      location /dronefly/ccpa {
         index index.html;
      }
      location /dronefly/copyrights {
         index index.html;
      }

      location /coinidentifyer {
         index index.html;
      }
      location /coinidentifyer/terms {
         index index.html;
      }
      location /coinidentifyer/privacy {
         index index.html;
      }
      location /coinidentifyer/ccpa {
         index index.html;
      }
      location /coinidentifyer/copyrights {
         index index.html;
      }
      location /coinidentifyer/app-ads.txt {
         try_files $uri =404;
      }
