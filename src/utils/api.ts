export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const response = await fetch(`${baseUrl}${url}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};