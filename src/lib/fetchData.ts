export const fetchData = async (link: string, init?: RequestInit) => {
    try {
        const api = await fetch(link, init);
        const res = await api.json();
        return res
    } catch (error) {
        console.log(error)
    }
}