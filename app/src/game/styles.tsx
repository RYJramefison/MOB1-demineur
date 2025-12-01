import { StyleSheet } from 'react-native';

const CELL_SIZE = 22; // adjust as needed (20x20 should fit on most phones if small)
const CELL_MARGIN = 1;

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
    fontWeight: '600',
  },
  boardContainer: {
    // To centralize board
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cellHidden: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    margin: CELL_MARGIN,
    backgroundColor: '#1bb5fc',
    borderRadius: 2,
  },
  cellRevealed: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    margin: CELL_MARGIN,
    backgroundColor: '#858889',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  cellNumber: {
    fontWeight: '700',
    fontSize: 12,
  },
  bombImage: {
    width: CELL_SIZE - 4,
    height: CELL_SIZE - 4,
  },
  gameOverContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  gameOverText: {
    color: '#ff3b3b',
    fontSize: 16,
    marginBottom: 8,
  },
  restartButton: {
    width: 140,
  },
});