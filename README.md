# Shopping-QR-Application
## Dev Backend de la solution QRCode en 3 blocs --> Architecture.svg
##### Couche API qui expose des API REST portée par le service Firebase Functions et développée en NodeJS
##### Couche base de données contenant les infos de chaque promo portée par le service Firestore de Firebase
##### Couche stockage contenant les images des QRcode portée par le service Storage de Firebase 
## Test des appels Backend effectués avec succès avec l'outil POSTMAN
##### get all discount https://us-central1-gostyle-3e0af.cloudfunctions.net/webApi/api/v1/discount/
##### get specific discount https://us-central1-gostyle-3e0af.cloudfunctions.net/webApi/api/v1/discount/ID1
