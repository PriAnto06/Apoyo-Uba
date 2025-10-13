# tests/conftest.py
import pytest
from app.main import create_app  # IMPORTANTE: solo desde main.py

@pytest.fixture
def client():
    app = create_app()
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client
