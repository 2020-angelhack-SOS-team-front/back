# AngelHack 2020 Seoul

## Team: SOS(Save Our Stores)

Backend repository

### 구성원

[이성준](https://github.com/laolee010126), [임규산](https://github.com/geusan)


### 기술 스택

`NodeJS`, `Express`, `MongoDB`, `Elasticbeanstalk`, `AWS`

### API list

- 시장 목록 호출

  Request: `GET` `/markets?address_contain=`
  
  Response

  ```json
  {
    "data":[
      {
        "_id":"5f13f0a8b175b36393bdbccf",
        "name":"중앙시장",
        "address":"강원도 강릉시 금성로 21"
      },
      ...
      {
        "_id":"5f13f0a8b175b36393bdbcd0",
        "name":"강릉동부시장",
        "address":"강원도 강릉시 옥천로 48"
      },
      {
        "_id":"5f13f0a8b175b36393bdc090",
        "name":"새마을시장",
        "address":"서울특별시 송파구 잠실동 207-4"
      }
    ]
  }
  ```

- 시장의 가게 목록 호출
  
  Request: `GET` `/markets/:marketId/stores`
  
  Response

  ```json
  {
    "data": [
      {
        "_id":"5f14382b35ca44298410b0d9",
        "name":"목포 앞바다",
        "image":"https://t1.daumcdn.net/cfile/blog/2331A14656BD6C4B1F",
        "description":"목포에서 오는 갓잡은 수산물",
        "tel":"010-1532-2253",
        "isRunning":1
      },
      ...
      {
        "_id":"5f14382b35ca44298410b0da",
        "name":"정직한 고기총각",
        "image":"https://img.hankyung.com/photo/201904/01.19359642.1.jpg",
        "description":"맛있는 고기만 판매합니다",
        "tel":"010-8573-2839",
        "isRunning":1
      }
    ]
  }
  ```

- 가게의 판매 목록 호출

  Request: `GET` `/markets/:marketId/stores/:storeId/products`

  Response

  ```json
  {
    "data":[
      {
        "_id":"5f1438723c3b7129ef1a4e30",
        "type":"meat_egg",
        "name":"삼겹살 1kg",
        "price":20000,
        "image":"https://cdn.pixabay.com/photo/2017/03/14/05/06/pork-2141994_1280.jpg",
        "description":"삼겹살",
        "store":"5f14382b35ca44298410b0da"
        }
      ]
    }
  ```

- 시장의 판매 목록 호출(카테고리별)
  
  Request: `GET` `/markets/:marketId/products?type=`

  Response

  ```json
  {
    "data": [
      {
        "_id":"5f1438723c3b7129ef1a4e38",
        "type":"seafood",
        "name":"완도 전복 500g",
        "price":15000,
        "image":"https://cdn.pixabay.com/photo/2020/06/01/11/51/abalone-5246386_1280.jpg",
        "description":"완도 전복",
        "store":{
          "_id":"5f14382b35ca44298410b0d8",
          "market":"5f13f0a8b175b36393bdc090",
          "name":"해운대끝판왕수산",
          "image":"https://lh3.googleusercontent.com/proxy/nNhDmdMULySqBynLRu4OluZUpAuwwPod8pd9_stTErgXDnUe4OHkmyRMp7l3gv6ntVUvRnRtgg5eozOcVvUFBo6t3VrEO6zKMvUtAUd-IXGZoX3u94eACQp8QdYj7u7eyeFP-pf-cY2YTYD-pbH_w0W7V8v91EuNI9eFi-D5AOXCdblP3atzCy_jMP_Kbh43eiCWqc8g3_wiJwK6jPKg3WDlHZ1HSDWEe0KFo-5cHuQonsQisb-SKJxN3AaFthcETyQhfT_0A3Njn2GioDmMq27b6VrGPZZSItOqyavOG9s0GfD7jQsKfRBN3Lkyfw2HERzK",
          "description":"싱싱한 수산물 전문판매",
          "tel":"010-4858-2234",
          "isRunning":1,
          "__v":0
        }
      },
      {
        "_id":"5f1438733c3b7129ef1a4e39",
        "type":"seafood",
        "name":"완도 전북 1kg",
        "price":28000,
        "image":"https://cdn.pixabay.com/photo/2020/06/01/11/51/abalone-5246386_1280.jpg",
        "description":"완도 전복",
        "store":{
          "_id":"5f14382b35ca44298410b0d8",
          "market":"5f13f0a8b175b36393bdc090",
          "name":"해운대끝판왕수산",
          "image":"https://lh3.googleusercontent.com/proxy/nNhDmdMULySqBynLRu4OluZUpAuwwPod8pd9_stTErgXDnUe4OHkmyRMp7l3gv6ntVUvRnRtgg5eozOcVvUFBo6t3VrEO6zKMvUtAUd-IXGZoX3u94eACQp8QdYj7u7eyeFP-pf-cY2YTYD-pbH_w0W7V8v91EuNI9eFi-D5AOXCdblP3atzCy_jMP_Kbh43eiCWqc8g3_wiJwK6jPKg3WDlHZ1HSDWEe0KFo-5cHuQonsQisb-SKJxN3AaFthcETyQhfT_0A3Njn2GioDmMq27b6VrGPZZSItOqyavOG9s0GfD7jQsKfRBN3Lkyfw2HERzK",
          "description":"싱싱한 수산물 전문판매",
          "tel":"010-4858-2234",
          "isRunning":1,
          "__v":0
        }
      },
      ...
      {
        "_id":"5f1438733c3b7129ef1a4e3d",
        "type":"seafood",
        "name":"문어 한마리",
        "price":5000,
        "image":"https://cdn.pixabay.com/photo/2017/04/06/09/38/the-upper-electrode-2207783_1280.jpg",
        "description":"탱탱한 문어",
        "store":{
          "_id":"5f14382b35ca44298410b0db",
          "market":"5f13f0a8b175b36393bdc090",
          "name":"목포 수산",
          "image":"https://modo-phinf.pstatic.net/20151123_167/14482411048625MV8E_JPEG/mosaZ5SdZP.jpeg?type=w1100",
          "description":"신선한 수산물 판매합니다",
          "tel":"010-2848-2859",
          "isRunning":1,
          "__v":0
        }
      }
    ]
  }
  ```

- 주문하기 

  Request: `POST` `/orders`
  
  Body
  
  ```json
  {
    "name": "수신인",
    "address": "배달 주소",
    "items": [
      { "product_id": "5f1438733c3b7129ef1a4e3d", "count": 1 }
    ]
  }
  ```

  Response

  ```json
  {
    "data": {
      "_id": "5f142fee5da08e24480cc7e6",
      "name": "받는사람",
      "address": "서울특별시 양천구 목4동 769-23",
      "items": [
        {
          "_id": "5f142fee5da08e24480cc7e7",
          "product": {
            "_id": "5f1424a357fa1a17eb84c629",
            "name": "완도 전복 500g",
            "price": 15000,
            "image": "",
            "description": "완도 전복",
            "type": "seafood",
            "store": "5f142108a4e128153739ea77",
            "__v": 0
          },
          "count": 2
        }
      ],
      "amount": 30000
    }
  }
  ```


- 주문 내역 조회
  
  Request: `GET` `/orders/:orderId`

  Response

  ```json
  {
    "data": {
      "_id": "5f142fee5da08e24480cc7e6",
      "name": "받는사람",
      "address": "서울특별시 양천구 목4동 769-23",
      "items": [
        {
          "_id": "5f142fee5da08e24480cc7e7",
          "product": {
            "_id": "5f1424a357fa1a17eb84c629",
            "name": "완도 전복 500g",
            "price": 15000,
            "image": "",
            "description": "완도 전복",
            "type": "seafood",
            "store": "5f142108a4e128153739ea77",
            "__v": 0
          },
          "count": 2
        }
      ],
      "amount": 30000
    }
  }
  ```

