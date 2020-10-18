import { ReactNode } from 'react';

export interface HeroShapedProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * Children to placed inside the section right side
	 */
	rightSide: ReactNode;
	/**
	 * Children to placed inside the section left side
	 */
	leftSide: ReactNode;
}
