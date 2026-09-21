import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

export const Navbar = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const items =
    user.role === 'instructor'
      ? [
          { label: 'Courses', to: '/courses' },
          { label: 'Dashboard', to: '/instructor' },
        ]
      : [
          { label: 'Courses', to: '/courses' },
          { label: 'My Courses', to: '/my-courses' },
        ];

  return (
    <nav className="container" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} style={{ textDecoration: 'none', color: '#0f172a' }}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <button className="btn btn-danger" type="button" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
