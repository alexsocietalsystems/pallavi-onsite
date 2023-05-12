import { db } from "../../lib/db";
export const citations = () => {
  return db.citation.findMany();
};
export const citation = ({
  id
}) => {
  return db.citation.findUnique({
    where: {
      id
    }
  });
};
export const createCitation = ({
  input
}) => {
  return db.citation.create({
    data: input
  });
};
export const updateCitation = ({
  id,
  input
}) => {
  return db.citation.update({
    data: input,
    where: {
      id
    }
  });
};
export const deleteCitation = ({
  id
}) => {
  return db.citation.delete({
    where: {
      id
    }
  });
};
export const Citation = {
  court: (_obj, {
    root
  }) => {
    return db.citation.findUnique({
      where: {
        id: root?.id
      }
    }).court();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYiIsImNpdGF0aW9ucyIsImNpdGF0aW9uIiwiZmluZE1hbnkiLCJpZCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNyZWF0ZUNpdGF0aW9uIiwiaW5wdXQiLCJjcmVhdGUiLCJkYXRhIiwidXBkYXRlQ2l0YXRpb24iLCJ1cGRhdGUiLCJkZWxldGVDaXRhdGlvbiIsImRlbGV0ZSIsIkNpdGF0aW9uIiwiY291cnQiLCJfb2JqIiwicm9vdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvc2VydmljZXMvY2l0YXRpb25zL2NpdGF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG4gIFF1ZXJ5UmVzb2x2ZXJzLFxuICBNdXRhdGlvblJlc29sdmVycyxcbiAgQ2l0YXRpb25SZWxhdGlvblJlc29sdmVycyxcbn0gZnJvbSAndHlwZXMvZ3JhcGhxbCdcblxuaW1wb3J0IHsgZGIgfSBmcm9tICdzcmMvbGliL2RiJ1xuXG5leHBvcnQgY29uc3QgY2l0YXRpb25zOiBRdWVyeVJlc29sdmVyc1snY2l0YXRpb25zJ10gPSAoKSA9PiB7XG4gIHJldHVybiBkYi5jaXRhdGlvbi5maW5kTWFueSgpXG59XG5cbmV4cG9ydCBjb25zdCBjaXRhdGlvbjogUXVlcnlSZXNvbHZlcnNbJ2NpdGF0aW9uJ10gPSAoeyBpZCB9KSA9PiB7XG4gIHJldHVybiBkYi5jaXRhdGlvbi5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2l0YXRpb246IE11dGF0aW9uUmVzb2x2ZXJzWydjcmVhdGVDaXRhdGlvbiddID0gKHtcbiAgaW5wdXQsXG59KSA9PiB7XG4gIHJldHVybiBkYi5jaXRhdGlvbi5jcmVhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2l0YXRpb246IE11dGF0aW9uUmVzb2x2ZXJzWyd1cGRhdGVDaXRhdGlvbiddID0gKHtcbiAgaWQsXG4gIGlucHV0LFxufSkgPT4ge1xuICByZXR1cm4gZGIuY2l0YXRpb24udXBkYXRlKHtcbiAgICBkYXRhOiBpbnB1dCxcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ2l0YXRpb246IE11dGF0aW9uUmVzb2x2ZXJzWydkZWxldGVDaXRhdGlvbiddID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIuY2l0YXRpb24uZGVsZXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgQ2l0YXRpb246IENpdGF0aW9uUmVsYXRpb25SZXNvbHZlcnMgPSB7XG4gIGNvdXJ0OiAoX29iaiwgeyByb290IH0pID0+IHtcbiAgICByZXR1cm4gZGIuY2l0YXRpb24uZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiByb290Py5pZCB9IH0pLmNvdXJ0KClcbiAgfSxcbn1cbiJdLCJtYXBwaW5ncyI6IkFBTUEsU0FBU0EsRUFBRTtBQUVYLE9BQU8sTUFBTUMsU0FBc0MsR0FBR0EsQ0FBQSxLQUFNO0VBQzFELE9BQU9ELEVBQUUsQ0FBQ0UsUUFBUSxDQUFDQyxRQUFRLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRUQsT0FBTyxNQUFNRCxRQUFvQyxHQUFHQSxDQUFDO0VBQUVFO0FBQUcsQ0FBQyxLQUFLO0VBQzlELE9BQU9KLEVBQUUsQ0FBQ0UsUUFBUSxDQUFDRyxVQUFVLENBQUM7SUFDNUJDLEtBQUssRUFBRTtNQUFFRjtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTUcsY0FBbUQsR0FBR0EsQ0FBQztFQUNsRUM7QUFDRixDQUFDLEtBQUs7RUFDSixPQUFPUixFQUFFLENBQUNFLFFBQVEsQ0FBQ08sTUFBTSxDQUFDO0lBQ3hCQyxJQUFJLEVBQUVGO0VBQ1IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTUcsY0FBbUQsR0FBR0EsQ0FBQztFQUNsRVAsRUFBRTtFQUNGSTtBQUNGLENBQUMsS0FBSztFQUNKLE9BQU9SLEVBQUUsQ0FBQ0UsUUFBUSxDQUFDVSxNQUFNLENBQUM7SUFDeEJGLElBQUksRUFBRUYsS0FBSztJQUNYRixLQUFLLEVBQUU7TUFBRUY7SUFBRztFQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxPQUFPLE1BQU1TLGNBQW1ELEdBQUdBLENBQUM7RUFBRVQ7QUFBRyxDQUFDLEtBQUs7RUFDN0UsT0FBT0osRUFBRSxDQUFDRSxRQUFRLENBQUNZLE1BQU0sQ0FBQztJQUN4QlIsS0FBSyxFQUFFO01BQUVGO0lBQUc7RUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNVyxRQUFtQyxHQUFHO0VBQ2pEQyxLQUFLLEVBQUVBLENBQUNDLElBQUksRUFBRTtJQUFFQztFQUFLLENBQUMsS0FBSztJQUN6QixPQUFPbEIsRUFBRSxDQUFDRSxRQUFRLENBQUNHLFVBQVUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7UUFBRUYsRUFBRSxFQUFFYyxJQUFJLEVBQUVkO01BQUc7SUFBRSxDQUFDLENBQUMsQ0FBQ1ksS0FBSyxDQUFDLENBQUM7RUFDcEU7QUFDRixDQUFDIn0=