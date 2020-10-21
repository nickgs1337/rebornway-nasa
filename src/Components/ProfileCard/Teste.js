import React, { Component, useEffect  } from 'react';

const Teste = () => {

    const body = new FormData
    body.append("request", "{\"input\":{\"bounds\":{\"properties\":{\"crs\":\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\"},\"bbox\":[13,45,15,47]},\"data\":[{\"type\":\"S5PL2\",\"dataFilter\":{\"timeRange\":{\"from\":\"2018-12-28T00:00:00Z\",\"to\":\"2018-12-31T00:00:00Z\"}}}]},\"output\":{\"width\":512,\"height\":512}\\")
    body.append("evalscript", "//VERSION=3\nfunction setup() {\n  return {\n    input: [\"CO\", \"dataMask\"],\n    output: { bands:  4 }\n  }\n}\nconst minVal = 0.0\nconst maxVal = 0.1\nconst diff = maxVal - minVal\nconst rainbowColors = [[minVal,[0,0,0.5]],[minVal+0.125*diff,[0,0,1]],[minVal+0.375*diff,[0,1,1]],[minVal+0.625*diff,[1,1,0]],[minVal+0.875*diff,[1,0,0]],[maxVal,[0.5,0,0]]]\nconst viz = new ColorRampVisualizer(rainbowColors)\nfunction evaluatePixel(sample){\nvar rgba=viz.process(sample.CO)\nrgba.push(sample.dataMask)\nreturn rgba\n}")

    fetch("https://creodias.sentinel-hub.com/api/v1/process", {
        body,
        headers: {
            Authorization: "Bearer eyJraWQiOiJzaCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkZDM4MWIxYy1hZjBiLTQyN2UtOGQ0ZS0zNzJhODBlZWZmOWQiLCJhdWQiOiJmMmZjYTE3OC03M2IzLTRhNzAtOGJkMy0wZjAyZDU2OWEwYzQiLCJqdGkiOiI4Nzg4YmExZmNkOTYyYmJkNjY4MGIyMmFhY2IyNDEyMiIsImV4cCI6MTYwNTE5MjMxNiwibmFtZSI6IkNhaW8gR3JpbG8iLCJlbWFpbCI6ImNhaW9AbGFuZHdhcnMuY29tLmJyIiwiZ2l2ZW5fbmFtZSI6IkNhaW8iLCJmYW1pbHlfbmFtZSI6IkdyaWxvIiwic2lkIjoiMTJjNzYzYTUtMWIwMi00NzdjLWJhYmQtNjY5YTVjY2MxNzdhIiwiZGlkIjoxLCJkIjp7IjEiOnsicmEiOnsicmFnIjoxfSwidCI6MTEwMDB9fX0.J2yLcR-eCWNpB0dF8i4lUWm4dYfSIoj8FFROKi1yX2V8l1rRBezVJ2tZJ3tnZNEm76mMPqVbZoxizrlNgbSGZ2gLmtiESn6ONSUPuLfldjzwOuqiYZOYz2bHKve-GBX-55kulfitrV4WqfMr8VbJm8QpYpx6LoSycfCGC84ce0tc06gUQBO8L2U29mP_7nx9kWGhWj4jncSc9q06IHoH7b_t7gYPt-xWLuuIFczPCz2A_Cstikx13StcWhdRrqvVG1lfUDGRNr7hIucMBQ4y5DuTzf3dPFd58afk8yXZGDRmoBc8wrC-z_oguTl0m3vka2LEcvaOaWu8WNKzAItfpg",
            "Content-Type": "multipart/form-data"
        },
        method: "POST"
    }).then(r => console.log(r));

    return '';

}

export default Teste;