import { db } from "../../lib/db";
export const citizens = () => {
  return db.citizen.findMany();
};
export const citizen = ({
  id
}) => {
  return db.citizen.findUnique({
    where: {
      id
    }
  });
};
export const createCitizen = ({
  input
}) => {
  return db.citizen.create({
    data: input
  });
};
export const updateCitizen = ({
  id,
  input
}) => {
  return db.citizen.update({
    data: input,
    where: {
      id
    }
  });
};
export const deleteCitizen = ({
  id
}) => {
  return db.citizen.delete({
    where: {
      id
    }
  });
};
export const Citizen = {
  citation: (_obj, {
    root
  }) => {
    return db.citizen.findUnique({
      where: {
        id: root?.id
      }
    }).citation();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYiIsImNpdGl6ZW5zIiwiY2l0aXplbiIsImZpbmRNYW55IiwiaWQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGVDaXRpemVuIiwiaW5wdXQiLCJjcmVhdGUiLCJkYXRhIiwidXBkYXRlQ2l0aXplbiIsInVwZGF0ZSIsImRlbGV0ZUNpdGl6ZW4iLCJkZWxldGUiLCJDaXRpemVuIiwiY2l0YXRpb24iLCJfb2JqIiwicm9vdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvc2VydmljZXMvY2l0aXplbnMvY2l0aXplbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBRdWVyeVJlc29sdmVycyxcbiAgTXV0YXRpb25SZXNvbHZlcnMsXG4gIENpdGl6ZW5SZWxhdGlvblJlc29sdmVycyxcbn0gZnJvbSAndHlwZXMvZ3JhcGhxbCdcblxuaW1wb3J0IHsgZGIgfSBmcm9tICdzcmMvbGliL2RiJ1xuXG5leHBvcnQgY29uc3QgY2l0aXplbnM6IFF1ZXJ5UmVzb2x2ZXJzWydjaXRpemVucyddID0gKCkgPT4ge1xuICByZXR1cm4gZGIuY2l0aXplbi5maW5kTWFueSgpXG59XG5cbmV4cG9ydCBjb25zdCBjaXRpemVuOiBRdWVyeVJlc29sdmVyc1snY2l0aXplbiddID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIuY2l0aXplbi5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2l0aXplbjogTXV0YXRpb25SZXNvbHZlcnNbJ2NyZWF0ZUNpdGl6ZW4nXSA9ICh7XG4gIGlucHV0LFxufSkgPT4ge1xuICByZXR1cm4gZGIuY2l0aXplbi5jcmVhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2l0aXplbjogTXV0YXRpb25SZXNvbHZlcnNbJ3VwZGF0ZUNpdGl6ZW4nXSA9ICh7XG4gIGlkLFxuICBpbnB1dCxcbn0pID0+IHtcbiAgcmV0dXJuIGRiLmNpdGl6ZW4udXBkYXRlKHtcbiAgICBkYXRhOiBpbnB1dCxcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ2l0aXplbjogTXV0YXRpb25SZXNvbHZlcnNbJ2RlbGV0ZUNpdGl6ZW4nXSA9ICh7IGlkIH0pID0+IHtcbiAgcmV0dXJuIGRiLmNpdGl6ZW4uZGVsZXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgQ2l0aXplbjogQ2l0aXplblJlbGF0aW9uUmVzb2x2ZXJzID0ge1xuICBjaXRhdGlvbjogKF9vYmosIHsgcm9vdCB9KSA9PiB7XG4gICAgcmV0dXJuIGRiLmNpdGl6ZW4uZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiByb290Py5pZCB9IH0pLmNpdGF0aW9uKClcbiAgfSxcbn1cbiJdLCJtYXBwaW5ncyI6IkFBTUEsU0FBU0EsRUFBRTtBQUVYLE9BQU8sTUFBTUMsUUFBb0MsR0FBR0EsQ0FBQSxLQUFNO0VBQ3hELE9BQU9ELEVBQUUsQ0FBQ0UsT0FBTyxDQUFDQyxRQUFRLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsT0FBTyxNQUFNRCxPQUFrQyxHQUFHQSxDQUFDO0VBQUVFO0FBQUcsQ0FBQyxLQUFLO0VBQzVELE9BQU9KLEVBQUUsQ0FBQ0UsT0FBTyxDQUFDRyxVQUFVLENBQUM7SUFDM0JDLEtBQUssRUFBRTtNQUFFRjtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTUcsYUFBaUQsR0FBR0EsQ0FBQztFQUNoRUM7QUFDRixDQUFDLEtBQUs7RUFDSixPQUFPUixFQUFFLENBQUNFLE9BQU8sQ0FBQ08sTUFBTSxDQUFDO0lBQ3ZCQyxJQUFJLEVBQUVGO0VBQ1IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTUcsYUFBaUQsR0FBR0EsQ0FBQztFQUNoRVAsRUFBRTtFQUNGSTtBQUNGLENBQUMsS0FBSztFQUNKLE9BQU9SLEVBQUUsQ0FBQ0UsT0FBTyxDQUFDVSxNQUFNLENBQUM7SUFDdkJGLElBQUksRUFBRUYsS0FBSztJQUNYRixLQUFLLEVBQUU7TUFBRUY7SUFBRztFQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxPQUFPLE1BQU1TLGFBQWlELEdBQUdBLENBQUM7RUFBRVQ7QUFBRyxDQUFDLEtBQUs7RUFDM0UsT0FBT0osRUFBRSxDQUFDRSxPQUFPLENBQUNZLE1BQU0sQ0FBQztJQUN2QlIsS0FBSyxFQUFFO01BQUVGO0lBQUc7RUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNVyxPQUFpQyxHQUFHO0VBQy9DQyxRQUFRLEVBQUVBLENBQUNDLElBQUksRUFBRTtJQUFFQztFQUFLLENBQUMsS0FBSztJQUM1QixPQUFPbEIsRUFBRSxDQUFDRSxPQUFPLENBQUNHLFVBQVUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7UUFBRUYsRUFBRSxFQUFFYyxJQUFJLEVBQUVkO01BQUc7SUFBRSxDQUFDLENBQUMsQ0FBQ1ksUUFBUSxDQUFDLENBQUM7RUFDdEU7QUFDRixDQUFDIn0=