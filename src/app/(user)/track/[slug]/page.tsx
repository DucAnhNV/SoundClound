"use client"
import WaveTrack from "@/components/track/wave.track";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";

const DetailTrackPage = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('audio')
    return (

        <Container>
            <div>
                <WaveTrack />
            </div>
        </Container>
    )
}

export default DetailTrackPage;