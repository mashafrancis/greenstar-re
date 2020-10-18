export interface ReviewsProps {
	className?: string;
	data: IReviews[];
}

interface IReviews {
	authorPhoto: AuthorPhoto;
	authorName: string;
	authorOccupation: string;
	feedback: string;
}

export interface AuthorPhoto {
	src: string;
	srcSet: string;
}
