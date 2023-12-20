import { getOpenAIResponse } from "@/utils/openai"

export async function POST(request) {
    
   // console.log(request.body)

    const body = await request.json();
    console.log(body)

    const data= await getOpenAIResponse(body.prompt)
    // console.log("api output:", data)
    return Response.json( data )
  }