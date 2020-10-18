export interface FeaturesProps {
	className?: string;
	data: IFeatures[];
}

interface IFeatures {
	title: string;
	description: string;
	icon: string;
}
