import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserType = 'personal' | 'company';

interface PersonalUser {
  type: 'personal';
  name: string;
  age: number;
  job: string;
  email: string;
}

interface CompanyUser {
  type: 'company';
  companyName: string;
  startingDate: string;
  companyType: string;
  email: string;
}

export type User = PersonalUser | CompanyUser;

interface UserPreferences {
  servicePreferences: string[];
  points: number;
}

interface AuthContextType {
  user: User | null;
  userPreferences: UserPreferences;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: Omit<User, 'email'> & {email: string;password: string;}) => Promise<void>;
  logout: () => void;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
}

const defaultPreferences: UserPreferences = {
  servicePreferences: [],
  points: 0
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>(defaultPreferences);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedPreferences = localStorage.getItem('userPreferences');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }

    if (storedPreferences) {
      setUserPreferences(JSON.parse(storedPreferences));
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
  }, [userPreferences]);

  const login = async (email: string, password: string) => {
    // Simulated authentication - in a real app, this would call an API
    try {
      // For demo purposes, we'll create a mock user
      const mockUser: PersonalUser = {
        type: 'personal',
        name: 'Demo User',
        age: 28,
        job: 'Designer',
        email: email
      };

      setUser(mockUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed. Please check your credentials.');
    }
  };

  const signup = async (userData: Omit<User, 'email'> & {email: string;password: string;}) => {
    // Simulated signup - in a real app, this would call an API
    try {
      const { password, ...userWithoutPassword } = userData;
      setUser(userWithoutPassword as User);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Signup failed:', error);
      throw new Error('Signup failed. Please try again.');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const updateUserPreferences = (preferences: Partial<UserPreferences>) => {
    setUserPreferences((prev) => ({ ...prev, ...preferences }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userPreferences,
        isAuthenticated,
        login,
        signup,
        logout,
        updateUserPreferences
      }}>

      {children}
    </AuthContext.Provider>);

};