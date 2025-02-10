import styled from "@emotion/styled";

export const CardContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease-in-out;
`;

export const InfoRow = styled.div`
  display: flex;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
  transition: all 0.3s ease-in-out;
`;

export const Label = styled.span`
  flex: 0 0 120px;
  font-weight: 500;
  color: #666;
  text-align: left;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
`;

export const Value = styled.span`
  flex: 1;
  color: #333;
  font-weight: 400;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
`;

export const Message = styled.div`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  padding: 1rem;
  background: #f7f7f7;
  border-radius: 4px;
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease-in-out;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease-in-out;
`;

export const InfoLabel = styled.span`
  font-weight: 500;
  color: #666;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
`;

export const InfoValue = styled.span`
  font-weight: 400;
  color: #333;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
`;