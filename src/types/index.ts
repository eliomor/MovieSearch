// types.ts
export interface BaseResponse {
    Error?: string;
  }
  
  export interface SearchMoviesResponse extends BaseResponse {
    Search?: Array<{
      Title: string;
      Year: string;
      imdbID: string;
      Type: string;
      Poster: string;
    }>;
    totalResults?: string;
  }
  
  export interface MovieDetailsResponse extends BaseResponse {
    Title?: string;
    Year?: string;
    Poster?: string;
    Plot?: string;
    imdbID?: string;
  }
  