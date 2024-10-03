export const formatDuration = (durationInSeconds: string) => {
    const minutes = Math.floor(Number(durationInSeconds) / 60);
    const seconds = Number(durationInSeconds) % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
