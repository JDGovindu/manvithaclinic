 const servicesData = {
    "Hair Loss and Alopecia Treatment": {
       "title": "Hair Treatments",
       "summary": "Hair loss, also known as alopecia, can be a distressing condition affecting both men and women. Our dermatologist specializes in providing expert advice and treatment recommendations for hair loss and alopecia.",
       "content": [
          {
             "title": "Understanding Hair Loss:",
             "summary": "Hair loss can result from various factors, including genetics, hormonal changes, medical conditions, and lifestyle factors. Alopecia, a specific type of hair loss, can lead to patchy or complete hair loss on the scalp or other parts of the body."
          },
          {
             "title": "Causes of Hair Loss:",
             "content": [
                {
                   "content": "Genetic predisposition"
                },
                {
                   "content": "Hormonal changes, such as those related to pregnancy or menopause"
                }
             ]
          },
          {
             "title": "Treatment Recommendations:",
             "content": [
                {
                   "title": " Topical medications:",
                   "content": "A topical medication may be suggested to promote hair growth and slow down hair loss."
                },
                {
                   "title": " Oral medications:",
                   "content": "An oral medication may be recommended to reduce hair loss and promote hair regrowth in some cases."
                }
             ]
          }
       ],
       "remarks": "Don't let hair loss control your life. Schedule an online consultation today and take the first step towards restoring your confidence and achieving healthy, beautiful hair."
    }
}

function changeContent(clickedElement) {
   const currData = servicesData[clickedElement.innerHTML];
   var contentArea = document.getElementById("services__details");
   contentArea.innerHTML = `
   <div class="services__details__title">
         <span>${currData.title}</span>
         <h3>${clickedElement.innerHTML}</h3>
   </div>
   <div class="services__details__text">
         <p>${currData.summary}</p>
   </div>
   <div class="services__details__desc">
         ${currData.content?.map((content) =>
            `<ul class="services__details__feature">
               <h4>${content.title}</h4>
               <p>${content.summary ?? ''}</p>
               ${content.content?.map((value) => `<li><i class="fa fa-circle"></i><b>${value.title ?? ''}</b>${value.content}</li>` ?? '')}
            </ul>`
         )}
         <p>${currData.remarks}</p>
   </div>
   `
}