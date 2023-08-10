import Chance from 'chance';

const chance = Chance();

export const mockData = () => {
	return chance.name({ middle: true });
};
