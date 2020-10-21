import requests

headers = {
    'Authorization': 'Bearer eyJraWQiOiJzaCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkZDM4MWIxYy1hZjBiLTQyN2UtOGQ0ZS0zNzJhODBlZWZmOWQiLCJhdWQiOiJmMmZjYTE3OC03M2IzLTRhNzAtOGJkMy0wZjAyZDU2OWEwYzQiLCJqdGkiOiIxMjhjZTQ0MTQwMTdjOGM3ZTNmNDBmNDAxNzAyMTczYSIsImV4cCI6MTYwNTgzMTcxNSwibmFtZSI6IkNhaW8gR3JpbG8iLCJlbWFpbCI6ImNhaW9AbGFuZHdhcnMuY29tLmJyIiwiZ2l2ZW5fbmFtZSI6IkNhaW8iLCJmYW1pbHlfbmFtZSI6IkdyaWxvIiwic2lkIjoiNGQwNmIxOWUtMjRlNS00MjgzLTkyNmUtZGY2ZjI0ZjY2YWM0IiwiZGlkIjoxLCJhaWQiOiI5ODNkYjQwNC1lYTNjLTRmYzgtOTAxYS1iMmM1MGIyNmMzZDgiLCJkIjp7IjEiOnsicmEiOnsicmFnIjoxfSwidCI6MTEwMDB9fX0.F4ANHftFKqqGJwLFy9NWXc8MqsQingSMICrO6ioxbYEb-i3n3h0bvP5qh2WY-kPK9IqhT7rn1TaoRBfmVPLhBYhmB6nbk-Mg_hAbtQbS6R6QkGMbGmH1y0BOH0itsMXucxHeIw6MRwwrXCVdgDW5JOxIZIkbOuCo2NzSUVRa2jIrkz7w6Ws8m2SW1X5zuKwgsElTEs5ZAwe0-5qJn4l5nJKvH-no93OQjs2enFYYOAmbnC7i1ZK3g1omYSRlL0iQp1emO9dm-JnTcqf1fvyC8z9rcukHHmKRRF6g0BfVCddjxpR01ZvP4BbXXILKsh9S787R23XDYOceDMog3HEs6Q',
}

files = {
    'request': (None, '{ "input": { "bounds": { "properties": { "crs": "http://www.opengis.net/def/crs/OGC/1.3/CRS84" }, "bbox": [ 13, 45, 15, 47 ] }, "data": [ { "type": "S5PL2", "dataFilter": { "timeRange": { "from": "2018-12-28T00:00:00Z", "to": "2018-12-31T00:00:00Z" } } } ] }, "output": { "width": 512, "height": 512 } }'),
    'evalscript': (None, '//VERSION'),
}

response = requests.post('https://creodias.sentinel-hub.com/api/v1/process', headers=headers, files=files)

print(response)