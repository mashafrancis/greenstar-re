export interface IntegrationsProps {
	className?: string;
	data: IIntegrations[];
}

interface IIntegrations {
	logo: string;
	name: string;
	title: string;
}
