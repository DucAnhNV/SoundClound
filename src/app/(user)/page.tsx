import MainSlider from "@/components/main/main.slider";
import Container from '@mui/material/Container';
import { sendRequest } from '@/utils/api'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function HomePage() {

  // const res = await fetch("http://localhost:8000/api/v1/tracks/top", {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     category: 'CHILL',
  //     limit: 10
  //   })
  // });
  // console.log("check track", await res.json())

  const session = await getServerSession(authOptions)

  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: "POST",
    body: { category: 'CHILL', limit: 10 }
  })

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: "POST",
    body: { category: 'WORKOUT', limit: 10 }
  })

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: "POST",
    body: { category: 'PARTY', limit: 10 }
  })

  return (
    <Container>
      <MainSlider
        data={chills?.data ?? []}
        title={"Top Chill"}
      />
      <MainSlider
        data={workouts?.data ?? []}
        title={"Top Workout"}
      />
      <MainSlider
        data={party?.data ?? []}
        title={"Top Party"}
      />
      <div style={{ height: '100px' }}></div>
    </Container>
  );
}
