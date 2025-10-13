# tests/conftest.py
import pytest
from app import create_app  # en vez de from app.main
@pytest.fixture
def client():
    app = create_app()
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client
